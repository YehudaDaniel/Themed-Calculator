function init() {
    const state = {
        calculators: []
    }

    state.calculators.push(new Calculator(0, result));

    CalcView(1, state.calculators[0]);
}

window.addEventListener('load', init);