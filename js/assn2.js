
  function submitAnswers()
  {
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4").value;
    var q5 = document.getElementById("q5").value;
    var errorString = "";

    if (q1 == "")
    {
      errorString = document.getElementById("q1").name + " ";
    }

    if (q2=="")
    {
      errorString = errorString + document.getElementById("q2").name + " ";
    }

    if (q3=="")
    {
      errorString = errorString + document.getElementById("q3").name + " ";
    }

    if (q4=="")
    {
      errorString = errorString + document.getElementById("q4").name + " ";
    }

    if (q5=="")
    {
      errorString = errorString + document.getElementById("q5").name;
    }

    if (q1 == "" || q2 == "" || q3 == "" || q4 == "" || q5 == "")
    {
      alert("Please record an answer for: " + errorString);
      return false;
    }


    alert("Thanks for taking the survey! Here are the correct answers: \n" +
          "Question 1: Sorrento's w/ Ranch obviously \n" +
          "Question 2: Any and all times of day \n" +
          "Question 3: Just chz, buff chx, mushrooms, and pepperoni are" +
          "a few of the acceptable answers \n" +
          "Question 4: Yes, as long as it is not overwhelming." +
          "Pairs best with bbq chx and jalepenos. \n" +
          "Question 5: If you answered never have pizza again, you FAIL");
  }
