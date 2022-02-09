interface O {
  [key: string]: unknown;
}

const shallowDiffers = (a: O, b: O): boolean => {
  for (const i in a) {
    if (!(i in b)) {
      return true;
    }
  }

  for (const i in b) {
    if (a[i] !== b[i]) {
      return true;
    }
  }

  return false;
};

export default shallowDiffers;
