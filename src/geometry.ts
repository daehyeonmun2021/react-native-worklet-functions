export const size = (width: number, height?: number) => {
    return {
        width,
        height: height ?? width,

        get styleObj(){
            return {
                width: this.width,
                height: this.height
            }
        },

        /**
         * @example rect(x, y, ...tuple)
         */
        get tuple():[number, number]{
            return [this.width, this.height]
        },

        /** 
         * @use can be used as transform-origin
         */
        getCenter: function(x=0, y=0){
            'worklet'
            return {
                x: x + (this.width / 2),
                y: y + (this.height / 2)
            }
        },
    }
};
