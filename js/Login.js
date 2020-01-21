

document.getElementById("t7").onclick=function validate()
	 {
	                if (document.getElementById("t1").value=="")
	                {
	                    alert("Please provide your Username name!");
	                    document.getElementById("t1").focus();
	                    return false;
	                }

							 if (document.getElementById("t2").value=="")
							 {
									 alert("Please provide your Email!");
									 document.getElementById("t2").focus();
									 return false;
							 }

							                if (document.getElementById("t3").value=="")
							                {
							                    alert("Please provide your 10 Digit Mobile Number!");
							                    document.getElementById("t3").focus();
							                    return false;
							                }

														  if (document.getElementById("t4").value=="")
														   {
														     alert("Please provide your Password!");
														         document.getElementById("t4").focus();
														            return false;
														   }
															 if ((document.getElementById("t5").value)!="")
									                 {
									                     alert("Please provide your Confirm Password!");
									                     document.getElementById("t5").focus();
									                     return false;
									                 }
												if (document.getElementById("t6").value=="")
									                 {
									                     alert("Please provide your File!");
									                     document.getElementById("t6").focus();
									                     return false;
									                 }
}
