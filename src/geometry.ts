/**
 * Creates a size object with the given width and height.
 * @param width - The width of the size object.
 * @param height - The optional height of the size object. If not provided, it defaults to the width.
 * @returns An object with width, height, styleObj, tuple, and getCenter properties.
 */
export const size = (width: number, height?: number) => {
  return {
    width,
    height: height ?? width,

    get styleObj() {
      return {
        width: this.width,
        height: this.height,
      };
    },

    /**
     * @example rect(x, y, ...tuple)
     */
    get tuple(): [number, number] {
      return [this.width, this.height];
    },

    /**
     * @use can be used as transform-origin
     */
    getCenter: function (x = 0, y = 0) {
      'worklet';
      return {
        x: x + this.width / 2,
        y: y + this.height / 2,
      };
    },
  };
};
