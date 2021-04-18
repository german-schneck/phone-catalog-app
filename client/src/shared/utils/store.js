export function normalizeState(data, typeId = 'id') {
  const items = {};
  data.forEach((value) => {
    items[value[typeId]] = value;
  });

  return items;
}

export const unNormalizeState = (data) =>
  Object.keys(data).map((id) => data[id]);
