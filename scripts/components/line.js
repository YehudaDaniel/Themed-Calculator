const lineComponent = (line) => `
      <div class="calculator__numbers_line">
        ${line.map(num => buttonComponent(num.val)).join('')}
    </div>
`;
        

// <input type="button" value="7" data-number />
// <input type="button" value="8" data-number />
// <input type="button" value="9" data-number />
// <input type="button" value="DEL" id="del" name="del" class="delete" />