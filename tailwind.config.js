module.exports = {
      purge: [ 
            './components/**/*.{vue,js,ts}',
            './layouts/**/*.vue',
            './pages/**/*.vue',
            './composables/**/*.{js,ts}',
            './plugins/**/*.{js,ts}',
            './app.{js,ts,vue}'
        ], 
      important: true,
      darkMode: false,
      theme: {
        extend: {
          fontSize: {
            12: '12px',
            13: '13px',
            14: '14px',
            16: '16px',
            18: '18px',
            20: '20px',
            24: '24px',
            28: '28px',
            32: '32px',
            38: '38px',
            40: '40px',
            42: '42px',
            44: '44px',
            48: '48px',
            54: '54px',
            58: '58px'
          },
          zIndex: {
            0: 0,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50,
            25: 25,
            50: 50,
            75: 75,
            100: 100,
            auto: 'auto'
          },
          borderRadius: {
            0: '0',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            8: '8px',
            16: '16px',
            18: '18px',
            24: '24px',
            25: '25px',
            '50%': '50%'
          },
          spacing: {
            half: '50%',
            percent50: '50%',
            0: '0px',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            9: '9px',
            10: '10px',
            12: '12px',
            14: '14px',
            15: '15px',
            16: '16px',
            17: '17px',
            18: '18px',
            20: '20px',
            22: '22px',
            24: '24px',
            25: '25px',
            26: '26px',
            28: '28px',
            30: '30px',
            32: '32px',
            34: '34px',
            35: '35px',
            36: '36px',
            38: '38px',
            40: '40px',
            42: '42px',
            44: '44px',
            45: '45px',
            46: '46px',
            48: '48px',
            50: '50px',
            52: '52px',
            53: '53px',
            54: '54px',
            55: '55px',
            56: '56px',
            58: '58px',
            60: '60px',
            64: '64px',
            65: '65px',
            66: '66px',
            70: '70px',
            72: '72px',
            75: '75px',
            78: '78px',
            80: '80px',
            86: '86px',
            88: '88px',
            90: '90px',
            96: '96px',
            100: '100px',
            104: '104px',
            110: '110px',
            112: '112px',
            114: '114px',
            115: '115px',
            118: '118px',
            120: '120px',
            122: '122px',
            130: '130px',
            132: '132px',
            140: '140px',
            146: '146px',
            149: '149px',
            150: '150px',
            156: '156px',
            160: '160px',
            168: '168px',
            170: '170px',
            172: '172px',
            174: '174px',
            180: '180px',
            186: '186px',
            190: '190px',
            192: '192px',
            195: '195px',
            200: '200px',
            205: '205px',
            212: '212px',
            220: '220px',
            230: '230px',
            240: '240px',
            242: '242px',
            248: '248px',
            250: '250px',
            260: '260px',
            268: '268px',
            270: '270px',
            276: '276px',
            278: '278px',
            280: '280px',
            290: '290px',
            286: '286px',
            296: '296px',
            300: '300px',
            312: '312px',
            320: '320px',
            330: '330px',
            335: '335px',
            336: '336px',
            337: '337px',
            350: '350px',
            352: '352px',
            360: '360px',
            370: '370px',
            368: '368px',
            380: '380px',
            387: '387px',
            390: '390px',
            394: '394px',
            400: '400px',
            418: '418px',
            420: '420px',
            435: '435px',
            440: '440px',
            450: '450px',
            460: '460px',
            470: '470px',
            495: '495px',
            500: '500px',
            530: '530px',
            540: '540px',
            550: '550px',
            554: '554px',
            560: '560px',
            580: '580px',
            581: '581px',
            590: '590px',
            600: '600px',
            620: '620px',
            640: '640px',
            650: '650px',
            660: '660px',
            690: '690px',
            700: '700px',
            710: '710px',
            750: '750px',
            800: '800px',
            1010: '1010px',
            1280: '1280px',
            1350: '1350px',
            1400: '1400px',
            1600: '1600px'
          },
          width: (theme) => ({
            '20%': '20%',
            '25%': '25%',
            '30%': '30%',
            '33%': '33%',
            '40%': '40%',
            '50%': '50%',
            '60%': '60%',
            '86%': '86%',
            '70%': '70%',
            '80%': '80%',
            '90%': '90%',
            full: '100%',
            ...theme('spacing')
          }),
          height: (theme) => ({
            '80%': '80%',
            ...theme('spacing')
          }),
          maxWidth: (theme) => ({
            ...theme('spacing')
          }),
          margin: (theme) => ({
            auto: 'auto',
            '-10': '-10px',
            '-12': '-12px',
            '-20': '-20px',
            '-50': '-50px',
            '-80': '-80px',
            '5%': '5%',
            '10%': '10%',
            trb10: '10px 10px 10px 0',
            ...theme('spacing')
          }),
          lineHeight: (theme) => ({
            full: '100%',
            ...theme('spacing')
          }),
          padding: (theme) => ({
            ...theme('spacing')
          }),
          backgroundColor: {
            f009e79: '#009e79',
            fdad48: '#fdad48',
            eef8ff: '#eef8ff',
            bg49BAA0: '#49BAA0',
            transparent: 'transparent',
            f5f5f5: '#f5f5f5',
            fceae9: '#fceae9',
            fff: '#fff',
            fafafa: '#fafafa',
            FF: '#0090FF',
            f6fafd: '#f6fafd',
            e7f0f9: '#e7f0f9',
            e6f7ff: '#e6f7ff',
            F0F7FF: '#F0F7FF',
            f8f8f8: '#f8f8f8',
            f9fbfe: '#f9fbfe',
            f3f5f8: '#f3f5f8',
            f53A60: '#F53A60',
            e6f7ff: '#e6f7ff',
            f8f8fa: '#f8f8fa'
          },
          border: (theme) => ({
            ...theme('spacing')
          }),
          borderColor: {
            fff: '#fff',
            bg49BAA0: '#49BAA0',
            999: '#999',
            f0f0f0: '#f0f0f0',
            eee: '#eee',
            E5E5E5: '#E5E5E5',
            red: '#f53a60',
            cc4e3: '#9cc4e3',
            ddd: '#ddd',
            dfe2e6: '#dfe2e6'
          },
          colors: {
            colorb8: '#B8BBBF',
            color89: '#899099',
            colorf53: '#F53A60',
            color94: '#94959C',
            colorf37: '#f3781e',
            fff: '#fff',
            color999: '#999',
            red: '#f53a60',
            color0: '#202d40',
            color3: '#333',
            color6: '#666',
            blue: '#3673fe',
            primary: '#3673fe',
            color6f: '#6f747e',
            F66F6A: '#F66F6A',
            FA394B: '#FA394B',
            color2a: '#2a2a2a',
            color23: '#232323',
            color5f: '#5F6C80',
            color35: '#353535',
            c7c7c7: '#c7c7c7',
            ff6242: '#ff6242',
            a9bf: '#99a9bf',
            F55353: '#F55353',
            color7a: '#7a7a7a',
            color36: '#3673fe',
            color20: '#202d40',
            colora8: '#a8b2bb',
            colorf9a0: '#f9a000',
            color1b: '#202D40',
            color32: '#32b16c',
            color3d: '#3d4046',
            colorFF: '#FF9700',
            color99a: '#99a4b8',
            181819: '#181819',
            c1bdbd: '#c1bdbd',
            979797: '#979797',
            '#8592A7': '#8592A7',
            '#49BAA0': '#49BAA0',
            '#006AFF': '#006AFF',
            '#f0f3f6': '#f0f3f6',
            '#6464641a': '#6464641a',
            f3f5f8: '#f3f5f8'
          },
          minWidth: (theme) => ({
            720: '720px',
            1200: '1200px',
            ...theme('spacing')
          }),
          minHeight: (theme) => ({
            720: '720px',
            370: '370px',
            210: '210px',
            1200: '1200px',
            ...theme('spacing')
          }),
          top: (theme) => ({
            half: '50%',
            ...theme('spacing')
          }),
          right: (theme) => ({
            20: '20px',
            ...theme('spacing')
          }),
          left: (theme) => ({
            half: '50%',
            ...theme('spacing')
          }),
          bottom: (theme) => ({
            ...theme('spacing')
          }),
          transform: (theme) => ({
            ...theme('spacing')
          })
        }
      },
      variants: {
        underline: ['hover']
      },
      plugins: []
    }
    
    
    
    