# Migration `20200521124415-bids-price-type-chg`

This migration has been generated by rahul at 5/21/2020, 12:44:15 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."bids" DROP COLUMN "price",
ADD COLUMN "price" text  NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200520194434-price-float-to-string..20200521124415-bids-price-type-chg
--- datamodel.dml
+++ datamodel.dml
@@ -3,17 +3,17 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 model bids {
   active    Boolean? @default(true)
   created   DateTime @default(now())
   id        Int      @default(autoincrement()) @id
   orders_id Int
-  price     Float
+  price     String
   status    Int?     @default(0)
   updated   DateTime @default(now())
   users_id  Int
   orders    orders   @relation(fields: [orders_id], references: [id])
```


