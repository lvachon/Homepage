import {makeStyles} from '@mui/styles';

export default makeStyles({
	
      '@keyframes fadeIn': {
        '0%':   { 'opacity': '0', },
        '100%': { 'opacity': '1', },
      },
      '@keyframes fadeOut': {
        '0%':   { 'opacity': '1', },
        '100%': { 'opacity': '0', },
      },
      '@ body': {
        'fontFamily':'sansSerif',
        'padding':'0px',
        'margin':'0px',
      },
      'bgClass': {
        'backgroundColor':'#BBBBBB',
        'backgroundImage': 'inherit',
        'backgroundSize': 'cover',
        'backgroundBlendMode': 'multiply',
        'backgroundPosition': 'center'
      },
      'pbody': {
        'position':'fixed',
        'top':'0px',
        'left':'0px',
        'width':'100%',
        'height':'100%',
        'opacity':'0',
        'zIndex':'-1',
      },
      'categoryContainerV': {
	  'display':'flex',
	  'alignItems':'center',
	  'flexWrap':'wrap',
	  'margin':'0px',
	  'height':'100%',
	  'width':'100%',
	},

	'categoryContainerH': {
	  'display':'flex',
	  'justifyContent':'space-around',
	  'flexWrap':'wrap',
	  'margin':'0px',
	  'width':'100%',
	},

	'category': {
	  'cursor':'pointer',
	  'padding':'1cm',
	  'margin':'1cm',
	  'fontSize':'2cm',
	  'fontFamily':'sans-serif',
	  'borderRadius':'0.5cm',
	  'background':'#222222',
	  'minWidth':'5cm',
	  'mixBlendMode':'overlay',
	  'color':'#FFFFFF',
	},

	'watermark': {
	  'position':'fixed',
	  'zIndex':'1',
	  'left':'4px',
	  'top':'4px',
	  'backgroundColor':'#FFFFFF80',
	  'padding':'4px',
	  'borderRadius':'2px',
	  'margin':'2px',
	},

	'watermark a': {
	  'color':'#00000080',
	},

	'title': {
	  'width':'100%',
	  'top':'calc(15vh - 2.5cm)',
	  'textAlign':'center',
	  'mixBlendMode':'color-dodge',
	  'position':'absolute',
	  'color':'#888888',
	  'fontSize':'5cm',
	},

	'subsection': {
	  'background':'#00000080',
	  'color':'#CCCCCC',
	  'borderRadius':'1cm',
	  'padding':'1cm',
	  'width':'50%',
	  'margin':'auto',
	},

	'subsection a': {
	  'color':'#CCCCCC',
	},

	'@media screen and (orientation: landscape) and (max-width:1050px)': {
	  '@ body': {
	    'zoom':'50%',
	  }
	}
})