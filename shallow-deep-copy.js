function cloneSO(obj) {
    
    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = cloneSO(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)){
                copy[attr] = cloneSO(obj[attr]);
            } 
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}