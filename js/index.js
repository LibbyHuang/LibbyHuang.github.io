$('button').on('click',function(){
    m=$('#m0').val()
    v=$('#velocity').val()

    c=3*(Math.pow(10,8))
    a=Math.pow(v/c,2)
    r=1/Math.pow(1-a,1/2)

    ans1=m*r

    $('#ans').val(ans1)
})