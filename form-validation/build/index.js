"use strict";
const handleSubmit = () => {
    const person = document.getElementById('person-name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    if (person.length === 0 ||
        subject.length === 0 ||
        message.length === 0) {
        // Oh no an error! We should tell the user.
    }
    else {
        const form = document.getElementById('send-message-form');
        form.submit();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO0lBQ3hCLE1BQU0sTUFBTSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQixDQUFDLEtBQUssQ0FBQTtJQUNqRixNQUFNLE9BQU8sR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBc0IsQ0FBQyxLQUFLLENBQUE7SUFDOUUsTUFBTSxPQUFPLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQXNCLENBQUMsS0FBSyxDQUFBO0lBRTlFLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUNwQixPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN4QiwyQ0FBMkM7S0FDNUM7U0FBTTtRQUNMLE1BQU0sSUFBSSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQXFCLENBQUE7UUFDOUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO0tBQ2Q7QUFDSCxDQUFDLENBQUEifQ==