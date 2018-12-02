/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-02 23:03:08
 * @version $Id$
 */

$(function(){
    $('#select').click(function(){
        // #id 选择器
        $('#test_id').hide();
        // .class 选择器
        $('.test_class').hide();
        // 选取当前 HTML 元素
        $('this').hide();
        // 选取第一个 <p> 元素
        $('p:first').hide();
        // 选取带有 href 属性的元素
        $("[href]").hide();
        //选取所有 target 属性值等于 "_blank" 的 <a> 元素
        $("a[target='_blank']").hide();
        //选取所有 target 属性值等于 "_blank" 的 <a> 元素
        $(':button').hide();
    });    
});   