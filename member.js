function skillsMember() {
    let skills = document.getElementById("skills");
    let member = document.getElementById("member");
    let skillsMember = document.getElementById("skillsMember");
    let memberSkills = document.getElementById("memberSkills");
    let memberSkills2 = document.getElementById("memberSkills2");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        member.style.display = "none";
        skillsMember.style.display = "block";
        memberSkills.style.display = "none";
        memberSkills2.style.display = "none";
    } else {
        skills.style.display = "none";
        member.style.display = "block";
        skillsMember.style.display = "none";
        memberSkills.style.display = "block";
        memberSkills2.style.display = "block";
    }
}