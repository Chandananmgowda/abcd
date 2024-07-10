const testText = "My dear husband,love uh !!!!";

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "test" && password === "password") {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('typing-test').style.display = 'block';
    document.getElementById('test-text').textContent = testText;
  } else {
    alert('Invalid credentials');
  }
}

function submitTest() {
  const typedText = document.getElementById('typed-text').value;
  const originalWords = testText.split(' ');
  const typedWords = typedText.trim().split(' ');
  let correctWords = 0;

  for (let i = 0; i < originalWords.length; i++) {
    if (originalWords[i] === typedWords[i]) {
      correctWords++;
    }
  }

  const accuracy = (correctWords / originalWords.length) * 100;
  const speed = (typedWords.length / (testDuration / 60)).toFixed(2);

  document.getElementById('result').textContent = `Speed: ${speed} WPM, Accuracy: ${accuracy.toFixed(2)}%`;
}

let testStartTime = 0;
let testDuration = 0;

document.getElementById('typed-text').addEventListener('focus', () => {
  testStartTime = new Date().getTime();
});

document.getElementById('typed-text').addEventListener('blur', () => {
  testDuration = (new Date().getTime() - testStartTime) / 1000;
});
