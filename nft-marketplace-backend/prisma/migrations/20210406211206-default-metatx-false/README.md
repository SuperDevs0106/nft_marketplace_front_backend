# Migration `20210406211206-default-metatx-false`

This migration has been generated by rahuldamodar94 at 4/6/2021, 9:12:06 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."categories" ALTER COLUMN "isMetaTx" SET DEFAULT false,
ALTER COLUMN "isOpenseaCompatible" SET DEFAULT false;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210330183050-is-metatx-for-erc20..20210406211206-default-metatx-false
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 model bids {
   active    Boolean? @default(true)
@@ -31,10 +31,10 @@
   updated             DateTime              @default(now())
   url                 String?
   type                String?               @default("ERC721")
   tokenURI            String?
-  isOpenseaCompatible Boolean?              @default(true)
-  isMetaTx            Boolean?              @default(true)
+  isOpenseaCompatible Boolean?              @default(false)
+  isMetaTx            Boolean?              @default(false)
   categoriesaddresses categoriesaddresses[]
   orders              orders[]
   assetmigrate        assetmigrate[]
 }
```


