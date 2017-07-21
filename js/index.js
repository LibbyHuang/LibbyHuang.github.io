$('button').on('click', function(){
    sou=$('#sound').val();
    var text;
	switch(sou){
		case"7":
            text="第五弦第二格、第二弦空弦";
			break;
        case"6":
			text="第五弦空弦、第三弦第二格";
			break;
        case"5":
            text="第六弦第三格、第三弦空弦";
			break;
        case"4":
            text="第六弦第一格、第四弦第三格";
			break;
        case"3":
            text="第六弦空弦、第一弦空弦";
			break;
        case"2":
            text="第四弦空弦、第二弦第三格";
			break;
        case"1":
           text="第五弦第三格、第二弦第一格";
			break;
        default:
            text="Do you know what the music is?"
            break;
}
    $('#ans').text(text);
})

