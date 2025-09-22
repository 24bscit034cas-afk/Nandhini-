<!DOCTYPE html>
<html>
<head>
<title>Simple JavaScript Example</title>
</head>
<body>
<h1 id="greeting">Hello!</h1>
<button onclick="changeText()">Click Me</button>

<script>
function changeText() {
document.getElementById("greeting").innerHTML = "Hello, JavaScript!";
}
</script>
</body>
</html>
