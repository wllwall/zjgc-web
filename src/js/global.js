import heroImg1 from '../images/block/img01.webp'
import heroImg2 from '../images/block/img02.webp'
import heroImg3 from '../images/block/img03.jpg'
import ico1 from '../images/nav_child/ico_1.png'
import ico2 from '../images/nav_child/ico_2.png'
import ico3 from '../images/nav_child/ico_3.png'
import ico4 from '../images/nav_child/ico_4.png'
import ico5 from '../images/nav_child/ico_5.jpg'
import ico6 from '../images/nav_child/ico_6.jpg'
import ico7 from '../images/nav_child/ico_7.png'

const dssxyNav = [
  { label: '首页', href: 'https://dssxy.zjgsu.edu.cn/main.htm', children: [] },
  {
    label: '学院总览',
    href: 'https://dssxy.zjgsu.edu.cn/4463/list.htm',
    children: [
      { label: '学院概况', href: 'https://dssxy.zjgsu.edu.cn/4471/list.htm' },
      { label: '现任领导', href: 'https://dssxy.zjgsu.edu.cn/4472/list.htm' },
      { label: '机构设置', href: 'https://dssxy.zjgsu.edu.cn/4473/list.htm' },
      {
        label: '战略发展委员会',
        href: 'https://dssxy.zjgsu.edu.cn/zlfzwyh/list.htm'
      }
    ]
  },
  {
    label: '党建工作',
    href: 'https://dssxy.zjgsu.edu.cn/4470/list.htm',
    children: []
  },
  {
    label: '师资队伍',
    href: 'https://dssxy.zjgsu.edu.cn/4464/list.htm',
    children: [
      { label: '高层次人才', href: 'https://dssxy.zjgsu.edu.cn/4474/list.htm' },
      { label: '专任教师', href: 'https://dssxy.zjgsu.edu.cn/4475/list.htm' },
      { label: '双聘教师', href: 'https://dssxy.zjgsu.edu.cn/spjs/list.htm' },
      { label: '兼职教师', href: 'https://dssxy.zjgsu.edu.cn/4476/list.htm' },
      { label: '兼职教授', href: 'https://dssxy.zjgsu.edu.cn/4477/list.htm' },
      { label: '实务导师', href: 'https://dssxy.zjgsu.edu.cn/4478/list.htm' }
    ]
  },
  {
    label: '人才培养',
    href: 'https://dssxy.zjgsu.edu.cn/4465/list.htm',
    children: [
      { label: '本科生教育', href: 'https://dssxy.zjgsu.edu.cn/4479/list.htm' },
      { label: '研究生教育', href: 'https://dssxy.zjgsu.edu.cn/4480/list.htm' }
    ]
  },
  {
    label: '科学研究',
    href: 'https://dssxy.zjgsu.edu.cn/4466/list.htm',
    children: [
      { label: '科研动态', href: 'https://dssxy.zjgsu.edu.cn/4481/list.htm' },
      { label: '科研成果', href: 'https://dssxy.zjgsu.edu.cn/4482/list.htm' },
      { label: '案例库', href: 'https://dssxy.zjgsu.edu.cn/4483/list.htm' }
    ]
  },
  {
    label: '招生就业',
    href: 'https://dssxy.zjgsu.edu.cn/4467/list.htm',
    children: [
      { label: '本科生招生', href: 'https://dssxy.zjgsu.edu.cn/4484/list.htm' },
      { label: '研究生招生', href: 'https://dssxy.zjgsu.edu.cn/4485/list.htm' },
      { label: '学生就业', href: 'https://dssxy.zjgsu.edu.cn/4486/list.htm' }
    ]
  },
  {
    label: '国际交流',
    href: 'https://dssxy.zjgsu.edu.cn/4468/list.htm',
    children: [
      { label: '项目介绍', href: 'https://dssxy.zjgsu.edu.cn/4487/list.htm' },
      { label: '学生交流', href: 'https://dssxy.zjgsu.edu.cn/4488/list.htm' },
      { label: '教师交流', href: 'https://dssxy.zjgsu.edu.cn/4489/list.htm' }
    ]
  },
  {
    label: '社会服务',
    href: 'https://dssxy.zjgsu.edu.cn/4469/list.htm',
    children: [
      { label: '企业培训', href: 'https://dssxy.zjgsu.edu.cn/4490/list.htm' },
      { label: '企业咨询', href: 'https://dssxy.zjgsu.edu.cn/4491/list.htm' }
    ]
  },
  {
    label: '校内网',
    href: 'https://dssxy.zjgsu.edu.cn/xnw/list.htm',
    children: []
  },
  {
    label: '联系我们',
    href: 'https://dssxy.zjgsu.edu.cn/lxwm/list.htm',
    children: []
  }
]

function safeText(v) {
  return (v === undefined || v === null ? '' : String(v))
    .replace(/\s+/g, ' ')
    .trim()
}

function fillMenus($root) {
  const $navMain = $root.find('.nav_main')
  const $navChild = $root.find('.nav_child')
  if (!$navMain.length || !$navChild.length) return

  const icons = [ico1, ico2, ico3, ico4, ico5, ico6, ico7]
  const quotes = [
    '北大是常为新的，<br />改进的运动的先锋，<br />要使中国向着好的，<br />往上的道路走。',
    '燕园画卷美不胜收，<br />恰似你将要留在这里的<br />青春年华。<br />北京大学欢迎你！',
    '勤奋、严谨、<br />求实、创新。',
    '思想自由、兼容并包。<br /><br />教育应指导社会，<br />而非追逐社会。',
    '博学之，审问之，<br />慎思之，明辨之，<br />笃行之。',
    '志于道，据于德，<br />依于仁，游于艺。',
    '秋冬春夏，<br />伴随着四时的运行，<br />青春和燕园融为一体，<br />北大成为永恒。'
  ]

  $navMain.empty()
  $navChild.empty()

  dssxyNav.forEach((m, index) => {
    const label = safeText(m.label) || '菜单'
    const href = safeText(m.href) || '#'
    const children = Array.isArray(m.children) ? m.children : []

    $navMain.append(
      $('<a target="_blank" rel="noopener"></a>').attr('href', href).text(label)
    )

    const $item = $('<div class="item"></div>')
    const $left = $('<div class="nav_child_left"></div>')
    $left.append(
      $('<div class="pic"></div>').append(
        $('<img alt="" />').attr('src', icons[index % icons.length])
      )
    )
    $left.append(
      $('<div class="txt"></div>').html(quotes[index % quotes.length])
    )

    const $right = $('<div class="nav_child_right"></div>')
    if (children.length) {
      children.forEach(c => {
        const cLabel = safeText(c.label)
        const cHref = safeText(c.href) || '#'
        if (!cLabel) return
        $right.append(
          $('<a target="_blank" rel="noopener"></a>')
            .attr('href', cHref)
            .text(cLabel)
        )
      })
    } else {
      $right.append(
        $('<a target="_blank" rel="noopener"></a>')
          .attr('href', href)
          .text(label)
      )
    }

    $item.append($left).append($right)
    $navChild.append($item)
  })
}

$(function () {
  document.addEventListener('selectstart', function (e) {
    e.preventDefault()
  })

  document.title = '稻盛商学院'

  fillMenus($('.body_a .dock2'))
  fillMenus($('.body_b .dock2'))

  $('.slide-group').slick({
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 650,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false
  })

  $('.slide-dots .slide-next').click(function () {
    $('.slide-group').slick('slickNext')
  })

  $('.slide-group').on(
    'beforeChange',
    function (event, slick, currentSlide, nextSlide) {
      $('.slide-dot')
        .eq(nextSlide)
        .addClass('active')
        .siblings()
        .removeClass('active')
    }
  )

  $('.slide-dot').click(function () {
    const index = $('.slide-dot').index(this)
    $('.slide-group').slick('slickGoTo', index)
  })

  const headlineSlides = [
    {
      href: '#',
      img: heroImg1,
      title: '稻盛商学院举行兼职教授、实务导师聘任仪式',
      desc: '2025年10月15日，浙江工商大学稻盛商学院在山西太原第十七届稻盛经营学企业践行报告会上，举行了兼职教授、实务导师聘任仪式，由浙江工商大学稻盛商学院院长李军宣读聘任文件并颁发聘书。'
    },
    {
      href: '#',
      img: heroImg2,
      title: '稻盛商学院举办师生交流会',
      desc: '围绕人才培养与课程建设，学院组织师生交流研讨，进一步凝聚共识，推动教学科研与社会服务协同发展。'
    },
    {
      href: '#',
      img: heroImg3,
      title: '稻盛商学院举行“东方管理”讲座',
      desc: '聚焦“东方管理与企业家精神”主题，邀请校内外专家学者分享前沿观点与实践经验，促进学术交流与思想碰撞。'
    }
  ]

  function setHeadline(index) {
    const safeIndex =
      typeof index === 'number' && index >= 0 && index < headlineSlides.length
        ? index
        : 0
    const data = headlineSlides[safeIndex]
    const $hero = $('.section01 .main .hero')
    if (!$hero.length) return

    $hero.attr('href', data.href || '#')
    $hero
      .find('.pic img')
      .attr('src', data.img)
      .attr('alt', data.title || '')
    $hero.find('.hero_title').text(data.title || '')
    $hero.find('.hero_desc').text(data.desc || '')

    const $dots = $hero.find('.hero_controls .dot')
    if ($dots.length) {
      $dots.eq(safeIndex).addClass('active').siblings().removeClass('active')
    }
  }

  let headlineIndex = 0
  setHeadline(headlineIndex)

  let headlineTimer = window.setInterval(() => {
    headlineIndex = (headlineIndex + 1) % headlineSlides.length
    setHeadline(headlineIndex)
  }, 7000)

  $('.section01 .main .hero_controls .dot').on('click', function () {
    const index = $(this).index()
    headlineIndex = index
    setHeadline(headlineIndex)
    if (headlineTimer) {
      window.clearInterval(headlineTimer)
    }
    headlineTimer = window.setInterval(() => {
      headlineIndex = (headlineIndex + 1) % headlineSlides.length
      setHeadline(headlineIndex)
    }, 7000)
  })

  let sto_nav
  $('.nav_main a').hover(
    function () {
      clearTimeout(sto_nav)
      $('.nav_child .item').removeClass('show')
      $('.nav_main a').removeClass('hover')
      const c = $(this)
        .parents('.navbar')
        .find('.nav_child')
        .find('.item')
        .eq($(this).index())
      const ol = $(this).parents('.navbar').offset().left
      const al = $(this).offset().left + $(this).outerWidth() * 0.5
      const fl = al - ol
      const cl = fl - c.outerWidth() * 0.5
      if (cl < 0) {
        c.css('left', 0)
      } else if (
        cl + c.outerWidth() >
        $(this).parents('.navbar').outerWidth()
      ) {
        c.css('right', 0)
      } else {
        c.css('left', cl)
      }
      $(this).addClass('hover')
      c.addClass('show')
    },
    function () {
      sto_nav = setTimeout(() => {
        $('.nav_child .item').removeClass('show')
        $('.nav_main a').removeClass('hover')
      }, 100)
    }
  )

  $('.nav_child .item').hover(
    function () {
      clearTimeout(sto_nav)
    },
    function () {
      $('.nav_child .item').removeClass('show')
      $('.nav_main a').removeClass('hover')
    }
  )
})
