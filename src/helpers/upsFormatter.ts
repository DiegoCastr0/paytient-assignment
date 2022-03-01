const upsFormatter = (ups: number): string => {
  const value = (ups / 1000).toFixed(1);
  return value + "k";
};

export default upsFormatter;
