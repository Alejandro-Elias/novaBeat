export const loadData = async () => {
  return await window.electronAPI.getMetaData();
};
