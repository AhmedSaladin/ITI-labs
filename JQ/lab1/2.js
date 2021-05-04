// Make any span inside any div colored. t1
$("span", "div").css("color", "red");

// Make any element with calss myclass inside any div colored. t2
$(".myclass", "div").css("color", "blue");

// Make any div with calss myclass colored. t3
$('div[class="myclass"]').css("color", "orange");

// t4
$("#t4>li").filter(":first-child").css("color", "red");
$("#t4>li").filter(":last-child").css("color", "orange");
$("#t4>li").filter(":nth-child(4)").css("color", "blue");

// t5
$("#nav>li>a").css("color", "red");

// t6
$("div[class='t6']").children(":not(h2)").css("background-color", "blue");

// Make all >3 colored '2' because it start with 0. t7
$("ol li:gt(2)").css("color", "aqua");

// Even Odd task. t8
$("tr:odd").css("color", "brown");
$("tr:even").css("color", "purple");

// one line of code. t9
$(".ss").filter(":gt(2),:lt(1)").css("color", "yellow");
