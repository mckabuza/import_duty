

// same as parseFloat, but with a default if parsing impossible
function parseFloatDefault(number, defaultValue) {
    var parsed = parseFloat(number);

    if (isNaN(parsed)) {
        return defaultValue;
    }

    return parsed;
}


// round to five cents
function roundToFiveCents(number) {
    return Math.round((number * 100)/5) * 5 / 100;
}

// takes a form element and returns the calculateDuties parameters
function parametersByForm(form) {

    var getValue = function(selector) {
        return form.querySelector(selector).value;
    };

    var isChecked = function(selector) {
        return form.querySelector(selector).checked;
    };

    var getPrice = function() {
        return parseFloatDefault(getValue('input[name="price"]'), 0.00);
    };
  

    
}


