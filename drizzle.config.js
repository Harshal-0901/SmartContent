/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://quill_owner:OG6YsdAb0IUu@ep-shrill-sun-a1ovipnh.ap-southeast-1.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };
  