const CalcView = (id, calc) => {
    let html = `
    <div id="calculator-${id} calculator">
        <div class="calculator__theme">
            <span class="calculator__theme_name">calc</span>
            <div class="calculator__theme_toggleBtn">
                <div class="toggleBtn">
                <span class="toggleBtn__header">THEME</span>
                <div class="toggleBtn__bar">
                    <div class="littleDot"></div>
                    <input type="radio" name="toggle" checked="checked">
                    <input type="radio" name="toggle" checked="">
                    <input type="radio" name="toggle" checked="">
                </div>
            </div>
        </div>
    </div>
        <div class="calculator__result">
            <input type="text" placeholder="" id="result"/>
        </div>
        <div class="calculator__numbers">
           ${linesComponent()}
           <div id="calculator__bottom_line">
                <input type="button" value="RESET" class="reset" />
                <input type="button" value="=" class="sum" />
            </div>
        </div>
    </div>
    `;

    wrapper.insertAdjacentHTML('beforeend', html);
}