const linesComponent = () => {
    return numberslines.map(line => lineComponent(line)).join('');
}