import api from "../api";

export default async function getAllAnalytics() {
  const res = await api.get("tasks/analytics");
  return res.data;
}
