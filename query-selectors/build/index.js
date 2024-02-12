"use strict";
const handleBlueButtonClick = () => {
    const blueParagraph = document.querySelector('.highlight-blue');
    const par4 = document.querySelector('#par-4');
    blueParagraph.style.background = 'blue';
    blueParagraph.style.color = 'white';
    par4.style.background = 'green';
    par4.style.color = 'white';
};
const handleRedButtonClick = () => {
    const paragraphs = document.querySelectorAll('.highlight-red');
    paragraphs.forEach(function (el) {
        el.style.background = 'red';
        el.style.color = 'white';
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLEVBQUU7SUFDakMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBZ0IsQ0FBQTtJQUM5RSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBZ0IsQ0FBQTtJQUM1RCxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUE7SUFDdkMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFBO0lBRW5DLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQTtJQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUE7QUFDNUIsQ0FBQyxDQUFBO0FBRUQsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUE0QixDQUFBO0lBQ3pGLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1FBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtRQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUE7SUFDMUIsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==