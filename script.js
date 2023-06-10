import crc32 from 'crc-32';

export const make = () => [];

export const set = (map, key, value) => {
  const hash = crc32.str(key);
  const index = Math.abs(hash % 1000);
  for (let i = 0; i < map.length; i += 1) {
    if ((Math.abs(i % 1000) === index) && (map[i][0] !== key)) {
      return false;
    }
  }
  map[index] = [key, value];
  return true;
};

export const get = (map, key, defaultValue = null) => {
  const hash = crc32.str(key);
  const index = Math.abs(hash % 1000);
  if (map[index]) {
    if (map[index][0] === key) {
      return map[index][1];
    }
  }
  return defaultValue;
};

export default make;
