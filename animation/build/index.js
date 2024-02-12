"use strict";
const myMove = () => {
    const element = document.getElementById('myAnimation');
    let position = 0;
    const frame = () => {
        if (position == 350) {
            clearInterval(id);
        }
        else {
            position++;
            element.style.top = `${position}px`;
            element.style.left = `${position}px`;
        }
    };
    const id = setInterval(frame, 10);
};
const button = document.getElementById('myButton');
button.addEventListener('click', myMove);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFO0lBQ2xCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFFLENBQUE7SUFDdkQsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFBO0lBQ2hCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNqQixJQUFJLFFBQVEsSUFBSSxHQUFHLEVBQUU7WUFDbkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1NBQ2xCO2FBQU07WUFDTCxRQUFRLEVBQUUsQ0FBQTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsUUFBVSxJQUFJLENBQUE7WUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxRQUFVLElBQUksQ0FBQTtTQUN2QztJQUNILENBQUMsQ0FBQTtJQUNELE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDbkMsQ0FBQyxDQUFBO0FBRUQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUUsQ0FBQTtBQUNuRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBIn0=