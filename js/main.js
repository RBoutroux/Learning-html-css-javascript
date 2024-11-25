function deleteBook(bookID, buttonRef){
    if (buttonRef!==null){
        // Collect data - empty
        // Ajax call
        $.ajax({
            url:"prwebStep2.json",
            method:"POST",
            data:{
                "bookID":bookID,
            },
            success:function(theResult){
                // get current TR
                var ref = buttonRef;
                while((ref!==null)&&(ref.tagName!=="TR")){
                    ref=ref.parentElement;
                }
                if(ref!==null){
                    ref.parentElement.removeChild(ref);
                }
            },
            error:function(theResult, theStatus, theError){
                console.log("Error: "+theStatus+" - "+theResult);
            }
        })
    }
}