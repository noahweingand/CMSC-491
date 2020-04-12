var chosenObj = undefined; // for the chosen objective on the page.
var check = 0; // Check to set progress bar

// Checks used to make sure each correct answer is only counted once
var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;
var check5 = 0;
var check6 = 0;
var check7 = 0;
var check8 = 0;
var check9 = 0;
var check10 = 0;

const allObj = [
  {
    name: "s1",
    diff: "Hard",
    clue:
      "VCUart's theatre where you can catch their latest mainstage production (Be sure to check out their next production coming this April: Spring Awakening).",
    img: "/spot1.png",
    latitude: 37.548534,
    longitude: -77.455252,
    answers: ["raymond hodges theatre"]
  },
  {
    name: "s2",
    diff: "Extra Hard",
    clue: "Old location that sells booze to minors!",
    img: "/spot2.jpg",
    latitude: 37.550259,
    longitude: -77.447446,
    answers: ["clay express market", "clay market", "clay street market"]
  },
  {
    name: "s3",
    diff: "Extra Hard",
    clue: "Richmond Vampire lives here.",
    img: "/spot3.jpg",
    latitude: 37.539598,
    longitude: -77.45429,
    answers: ["hollywood cemetary"]
  },
  {
    name: "s4",
    diff: "Medium",
    clue: "Two dollar pizza with drunk people!",
    img: "/spot4.jpg",
    latitude: 37.550554,
    longitude: -77.453552,
    answers: ["christian's pizza", "christians pizza"]
  },
  {
    name: "s5",
    diff: "Easy",
    clue: "A place to study with a lingering case of the bed bugs...",
    img: "/spot5.jpg",
    latitude: 37.547816,
    longitude: -77.453203,
    answers: ["cabell library", "cabell"]
  },
  {
    name: "s6",
    diff: "Easy",
    clue:
      "Where one would see popular plays, stand up, performers, and homecoming concerts on campus...",
    img: "/spot6.jpg",
    latitude: 37.546522,
    longitude: -77.451561,
    answers: ["altria theater"]
  },
  {
    name: "s7",
    diff: "Easy",
    clue:
      "Where one will attend ceremonies and graduation...IF you pass your classes...",
    img: "/spot7.jpeg",
    latitude: 37.5525497,
    longitude: -77.4553268,
    answers: ["siegel center"]
  },
  {
    name: "s8",
    diff: "Easy",
    clue:
      "Relatively new museum on campus where you can see all mediums of art",
    img: "/spot8.jpg",
    latitude: 37.548903,
    longitude: -77.44858,
    answers: ["institute of contemporary art"]
  },
  {
    name: "s9",
    diff: "Medium",
    clue: "Home of VCU's executive overseers who patrol campus",
    img: "/spot9.jpg",
    latitude: 37.544281,
    longitude: -77.4414988,
    answers: ["police station"]
  },
  {
    name: "s10",
    diff: "Easy",
    clue: "Crowded exercising on campus",
    img: "/spot10.jpg",
    latitude: 37.544457,
    longitude: -77.453989,
    answers: ["cary st gym", "cary st. gym", "cary street gym"]
  },
  {
    name: 's11',
    diff: 'Easy',
    clue: "The center of campus where you can find club events and protesters",
    img: '/spot11.jpg',
    latitude: 37.548534,
    longitude: -77.455252,
    answers: ["compass", "the compass"]
  },
  {
    name: 's12',
    diff: 'Easy',
    clue: "The dorm which has the 'art colony' on the first four floors",
    img: '/spot12.jpg',
    latitude: 37.548534,
    longitude: -77.455252,
    answers: ["johnson", "johnson hall"]
  },
  {
    name: 's13',
    diff: 'Hard',
    clue: "The art building where art majors can find the infinity wall/room",
    img: '/spot13.jpg',
    latitude: 37.548534,
    longitude: -77.455252,
    answers: ["depot", "the depot"]
  },
  {
      name: 's14',
      diff: 'Medium',
      clue: "The oldest art building at VCU, home to photography majors!",
      img: '/spot14.jpg',
      latitude: 37.548534,
      longitude: -77.455252,
      answers: ["pollak", "pollak building"]
  },
  {
      name: 's15',
      diff: 'Easy',
      clue: "VCU's main dining hall. You either love it or hate it...",
      img: '/spot15.jpg',
      latitude: 37.548534,
      longitude: -77.455252,
      answers: ["shafer", "shafer dining", "shafer dining hall"]
  },
  {
      name: 's16',
      diff: 'Easy',
      clue: "Where many classes are held and the building even has a basement",
      img: '/spot16.jpg',
      latitude: 37.548534,
      longitude: -77.455252,
      answers: ["hibbs", "hibbs hall", "hibbs building"]
  },
  {
      name: 's17',
      diff: 'Medium',
      clue: "The dorm that used to be a hospital 😱",
      img: '/spot17.jpg',
      latitude: 37.548534,
      longitude: -77.455252,
      answers: ["brandt", "brandt hall"]
  },
  {
      name: 's18',
      diff: 'Easy',
      clue: "A campus building where you can find food, ballrooms, video games, and an auditorium",
      img: '/spot18.jpg',
      latitude: 37.548534,
      longitude: -77.455252,
      answers: ["commons", "the commons"]
  },
  {
      name: 's19',
      diff: 'Medium',
      clue: "An art building that's a home to sculpting and craft",
      img: '/spot19.jpg',
      latitude: 37.548534,
      longitude: -77.455252,
      answers: ["the fab", "fab", "the fine arts building", "fine arts building", "the fine art building", "fine art building"]
  },
  {
      name: 's20',
      diff: 'Medium',
      clue: "Engineering building where you can find Computer Science on the 4th floor",
      img: '/spot20.png',
      latitude: 37.548534,
      longitude: -77.455252,
      answers: ["engineering east", "engineering building east", "snead", "snead hall", "east engineering", "east engineering hall", "east hall"]
  },
  {
      name: 's21',
      diff: 'Hard',
      clue: "A place near the compass where you can catch the 'No Shame' Talent Show",
      img: '/spot21.jpg',
      latitude: 37.548534,
      longitude: -77.455252,
      answers: ["shafer playhouse", "the shafer playhouse"]
  },
  {
      name: 's22',
      diff: "Easy",
      clue: "VCU's newest dorm",
      img: '/spot22.jpg',
      latitude: 37.548534,
      longitude: -77.455252,
      answers: ["grc", "the gladding residence center", "gladding residence center"]
  }
];

// onclick method for each spot objective anchor thing
$.each(allObj, function (i, v) {
  (function (v) {
    $("#" + v.name).click(() => {
      if (check < 1) {
        let currentProgress = $("#progress-bar").text();
        checkProgress(currentProgress);
        check = check + 1;
      }
      chosenObj = v.name;
      if (chosenObj !== undefined) {
        $("#top-right-text").text("Image Clue:");
        $("#top-right-text").css("font-weight", "Bold");
      }
      $("#difficulty").text("Difficulty: " + v.diff);
      $("#clue").text(v.clue);
      $("#mapclue").attr("src", v.img).width("100%");
      longitude = v.longitude;
      latitude = v.latitude;
      map.flyTo({ center: [longitude, latitude], zoom: 15.5 });
    });
  })(v);
});

// method for comparing answers
$("#enter-answer").on("click", () => {
  let input_answer = $("#answer-box").val().toLowerCase();
  let element = document.querySelector('#'+chosenObj); 

  let index = parseInt(chosenObj[1]) - 1; 
  let obj = allObj[index]; 

  for(answer of obj.answers){
    if(answer.toLowerCase() === input_answer.toLowerCase()){
        $("#isCorrect").text("Correct!");
        element.parentElement.removeChild(element);
        let currentProgress = $("#progress-bar").text();
        checkProgress(currentProgress);
        return; 
      }
  }
  $("#isCorrect").text("Nope, not quite!");
});

function checkProgress(percentage) {
  if (percentage === "0%") {
    $(".progress-bar").css("width", "1%");
    $(".progress-bar").css("background-color", "#FF0000");
    $("#progress-bar-text").text("1%");
  } else if (percentage === "1%") {
    $(".progress-bar").css("width", "10%");
    $(".progress-bar").css("background-color", "#FF3300");
    $("#progress-bar-text").text("10%");
  } else if (percentage === "10%") {
    $("#twenty").click();
    $(".progress-bar").css("width", "20%");
    $(".progress-bar").css("background-color", "#FF6600");
    $("#progress-bar-text").text("20%");
  } else if (percentage === "20%") {
    $(".progress-bar").css("width", "30%");
    $(".progress-bar").css("background-color", "#FF9900");
    $("#progress-bar-text").text("30%");
  } else if (percentage === "30%") {
    $(".progress-bar").css("width", "40%");
    $(".progress-bar").css("background-color", "#FFCC00");
    $("#progress-bar-text").text("40%");
  } else if (percentage === "40%") {
    $(".progress-bar").css("width", "50%");
    $(".progress-bar").css("background-color", "#FFFF00");
    $("#progress-bar-text").text("50%");
  } else if (percentage === "50%") {
    $(".progress-bar").css("width", "60%");
    $(".progress-bar").css("background-color", "#CCFF00");
    $("#progress-bar-text").text("60%");
  } else if (percentage === "60%") {
    $(".progress-bar").css("width", "70%");
    $(".progress-bar").css("background-color", "#99FF00");
    $("#progress-bar-text").text("70%");
  } else if (percentage === "70%") {
    $(".progress-bar").css("width", "80%");
    $(".progress-bar").css("background-color", "#66FF00");
    $("#progress-bar-text").text("80%");
  } else if (percentage === "80%") {
    $(".progress-bar").css("width", "90%");
    $(".progress-bar").css("background-color", "#33FF00");
    $("#progress-bar-text").text("90%");
  } else if (percentage === "90%") {
    $(".progress-bar").css("width", "100%");
    $(".progress-bar").css("background-color", "#00FF00");
    $("#progress-bar-text").text("100%");
  } else if (percentage === "100%") {
  } else {
    $(".progress-bar").css("width", "0%");
    $("#progress-bar-text").text("ERROR!");
  }
}
