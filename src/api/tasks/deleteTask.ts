import api from "../api";

export default async function deleteTask(data: { itemId: number }) {
  const res = await api.delete(`/tasks/${data.itemId}`);
  return res.data;
}
