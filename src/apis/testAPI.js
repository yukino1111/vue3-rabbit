import httpInstance from "@/utils/http";
export function getCategory() {
  return httpInstance.get({ url: "/home/category/head" });
}
