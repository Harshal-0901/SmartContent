"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { eq } from "drizzle-orm"; // Import eq from drizzle-orm
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

const UsageTrack = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
  const [maxWords, setMaxWords] = useState(5000);

  useEffect(() => {
    user && GetData();
    user && IsUserSubscribed();
  }, [user]);

  useEffect(() => {
    user && GetData()
  }, [updateCreditUsage && user])
  

  const GetData = async () => {
    // @ts-ignore
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
      // @ts-ignore
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    GetTotalUsage(result);
  };

  const IsUserSubscribed = async () => {
    const result = await db
      .select()
      .from(UserSubscription)
      .where(
        // @ts-ignore
        eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress)
      );

    if (result) {
      setUserSubscription(true);
      setMaxWords(50000);
    }
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      if (element.aiResponse) {
        const wordCount = element.aiResponse.trim().split(/\s+/).length;
        total += wordCount;
      }
    });

    setTotalUsage(total);
    //console.log(total);
  };

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: (totalUsage / maxWords) * 100 + "%" }}
          ></div>
        </div>
        <h2 className="text-sm my-2">
          {totalUsage}/{maxWords} Credit Used
        </h2>
      </div>
      <Button className="w-full my-3 bg-slate-200 text-black font-extrabold p-5">
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTrack;
