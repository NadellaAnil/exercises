"use strict";
console.log('Hello World!!!!');
const greeting = document.getElementById('user-name');
greeting.textContent = "Anil";
const tag = document.createElement("p");
tag.innerText = "Changed via Type script";
document.body.appendChild(tag);
greeting.style.color = "green";
document.getElementById('content').style.color = "red";
//const colArray:Array<any>=['red','green','blue'];
if (ele)
    ele.style.color = "red";
function handleClick() {
    const ele = document.getElementById("content");
    if (ele.style.color == "red") {
        ele.style.color = "green";
        ele === null || ele === void 0 ? void 0 : ele.textContent = "The content is in Green";
    }
    else {
        ele.style.color = "red";
        ele === null || ele === void 0 ? void 0 : ele.textContent = "The content is in red";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzlCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFFLENBQUE7QUFDdEQsUUFBUSxDQUFDLFdBQVcsR0FBQyxNQUFNLENBQUM7QUFFNUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUN2QyxHQUFHLENBQUMsU0FBUyxHQUFHLHlCQUF5QixDQUFBO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBRTlCLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFDLE9BQU8sQ0FBQTtBQUM1QixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBRXhELG1EQUFtRDtBQUVuRCxJQUFHLEdBQUc7SUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFFaEMsU0FBUyxXQUFXO0lBQ2hCLE1BQU0sR0FBRyxHQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsSUFBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQUM7UUFDeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzFCLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxXQUFXLEdBQUcseUJBQXlCLENBQUM7S0FFaEQ7U0FFRDtRQUNJLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN4QixHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsV0FBVyxHQUFHLHVCQUF1QixDQUFDO0tBQzlDO0FBR0wsQ0FBQyJ9