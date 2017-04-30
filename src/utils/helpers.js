const sanitise = t => {
  const target = t.indexOf('http') === 0 ? t : `http://${t}`;
  return target.length > 8 && target.indexOf('.') > 6 && target;
};

export default sanitise;
