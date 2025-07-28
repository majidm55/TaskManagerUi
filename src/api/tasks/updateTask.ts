import api from "../api";

export default async function updateTask(data: {
  title?: string;
  status?: number;
  itemId: number;
}) {
  const res = await api.patch(`/tasks/${data.itemId}`, {
    title: data.title,
    status: data.status,
  });
  return res.data;
}
