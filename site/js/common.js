$(document).ready(function(){


// popup's tabs
	// onClick
	if ($('.mgidMob_PopupElement').length) {
		$('.mgidMob_tabsPopup li').on('click', function(){
			var _linkChosen = $(this).children('a').attr('href');
			if (!$(this).hasClass('is-active')) {
				$('.mgidMob_tabsPopup li').removeClass('is-active');
				$(this).addClass('is-active');
				$('.mgidMob_tabsPopup-panel').removeClass('is-active');
				$('.mgidMob_PopupContent').find(_linkChosen).addClass('is-active');
			}
		});
	}
	// hide select-options on outer click
	$(document).click(function(e) {
		if ($(e.target).closest('.mgidMob_PopupInner').length === 0) {
			$('.mgidMob_PopupElement').hide();
		}
	});
	// close button
	$('.mgidMob_closePopup').on('click', function(){
		$(this).parents('.mgidMob_PopupElement').hide();
	});

// mgid custom select
	if ($('.mgidMob_select').length) {
		$('.mgidMob_select').each(function(){
			var _thisSelect = $(this);
			var _optionIndex = 0;

			// create custom select
			$(_thisSelect).hide();
			$(_thisSelect).parent().append('<div class="mgidMob_select-wrap"></div>')
			$(_thisSelect).siblings('.mgidMob_select-wrap').append('<div class="mgidMob_select-item" data-option="0"></div>');
			$(_thisSelect).siblings('.mgidMob_select-wrap').children('.mgidMob_select-item').append('<span class="mgidMob_select-text"></span>');
			$(_thisSelect).siblings('.mgidMob_select-wrap').children('.mgidMob_select-item').children('.mgidMob_select-text').text($(this).children('option').eq(0).text());
			$(_thisSelect).siblings('.mgidMob_select-wrap').children('.mgidMob_select-item').append('<span class="mgidMob_select-icon"></span>');

			// create list options
			$(_thisSelect).siblings('.mgidMob_select-wrap').append('<ul class="mgidMob_select-list"></ul>');
			$(_thisSelect).children('option').each(function(){
				var _optionText = $(this).text();
				$(_thisSelect).siblings('.mgidMob_select-wrap').children('.mgidMob_select-list').append('<li>'+_optionText+'</li>');
				_optionIndex++;
			});
			$(_thisSelect).siblings('.mgidMob_select-wrap').children('.mgidMob_select-list').children('li').eq(0).addClass('is-active');
		});

		// select logic
		$('.mgidMob_select-list li').on('click', function(){
			$(this).siblings('li').removeClass('is-active');
			$(this)
				.addClass('is-active')
				.parent()
				.siblings('.mgidMob_select-item')
				.attr('data-option', $(this).index())
				.children('.mgidMob_select-text')
				.text($(this).text());
			// selected option
			$(this).parent().parent().siblings('.mgidMob_select').children('option').removeAttr('selected');
			$(this).parent().parent().siblings('.mgidMob_select').children('option').eq($(this).index()).attr('selected', 'selected');
		});

		// hide select-options on outer click
		$(document).click(function(e) {
			if ($(e.target).closest('.mgidMob_select-item').length === 0) {
				$('.mgidMob_select-list').hide();
			}
		});

		// show/hide select options
		$('.mgidMob_select-item').on('click', function(){
			$(this).siblings('.mgidMob_select-list').toggle();
		});
	}
	
	
});