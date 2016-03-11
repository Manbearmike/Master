function MenuChoice()
{     if (document.getElementById("SectionMenu").value == "Display The First Section")
{         document.getElementById("FirstSection").style.visibility = "visible";
            document.getElementById("SecondSection").style.visibility = "hidden";
}
    else if (document.getElementById("SectionMenu").value == "Display The Second Section")
{         document.getElementById("FirstSection").style.visibility = "hidden";
            document.getElementById("SecondSection").style.visibility = "visible";
            }
            else
            {         document.getElementById("FirstSection").style.visibility = "hidden";
                    document.getElementById("SecondSection").style.visibility = "hidden";
            } }