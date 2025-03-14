document.addEventListener('DOMContentLoaded', function() {
    // 新闻站点数据
    const newsData = [
        // 左派媒体
        {
            name: "卫报",
            url: "https://www.theguardian.com/",
            region: "europe",
            country: "英国",
            bias: "left",
            description: "关注社会正义、环境和进步议题，英国知名左翼报纸。"
        },
        {
            name: "纽约时报",
            url: "https://www.nytimes.com/",
            region: "north-america",
            country: "美国",
            bias: "left",
            description: "美国主流媒体，倾向于支持自由主义和进步议题。"
        },
        {
            name: "解放报",
            url: "https://www.liberation.fr/",
            region: "europe",
            country: "法国",
            bias: "left",
            description: "法国重要的左翼媒体，关注社会不平等和人权问题。"
        },
        {
            name: "MSNBC",
            url: "https://www.msnbc.com/",
            region: "north-america",
            country: "美国",
            bias: "left",
            description: "美国电视网络，通常支持民主党和进步政策。"
        },
        {
            name: "CNN",
            url: "https://www.cnn.com/",
            region: "north-america",
            country: "美国",
            bias: "left",
            description: "美国有线电视新闻网，被视为倾向自由派和民主党的媒体。"
        },
        {
            name: "华盛顿邮报",
            url: "https://www.washingtonpost.com/",
            region: "north-america",
            country: "美国",
            bias: "left",
            description: "美国影响力巨大的报纸，倾向于自由主义立场。"
        },
        {
            name: "朝日新闻",
            url: "https://www.asahi.com/",
            region: "asia",
            country: "日本",
            bias: "left",
            description: "日本主要报纸，倾向于自由主义立场。"
        },
        // 中立媒体
        {
            name: "路透社",
            url: "https://www.reuters.com/",
            region: "europe",
            country: "英国",
            bias: "center",
            description: "国际新闻通讯社，以事实报道和中立立场著称。"
        },
        {
            name: "美联社",
            url: "https://apnews.com/",
            region: "north-america",
            country: "美国",
            bias: "center",
            description: "非营利性新闻合作组织，提供客观新闻报道。"
        },
        {
            name: "BBC",
            url: "https://www.bbc.com/",
            region: "europe",
            country: "英国",
            bias: "center",
            description: "英国公共广播公司，提供相对平衡的国际新闻报道。"
        },
        {
            name: "法新社",
            url: "https://www.afp.com/",
            region: "europe",
            country: "法国",
            bias: "center",
            description: "全球第三大国际通讯社，提供广泛的国际新闻。"
        },
        {
            name: "德国之声",
            url: "https://www.dw.com/",
            region: "europe",
            country: "德国",
            bias: "center",
            description: "德国国际广播机构，提供多语言新闻服务。"
        },
        {
            name: "时代周刊",
            url: "https://time.com/",
            region: "north-america",
            country: "美国",
            bias: "center",
            description: "美国知名新闻周刊，关注国际时事和政治。"
        },
        {
            name: "经济学人",
            url: "https://www.economist.com/",
            region: "europe",
            country: "英国",
            bias: "center",
            description: "英国国际新闻和商业杂志，关注全球经济和政治分析。"
        },
        {
            name: "彭博社",
            url: "https://www.bloomberg.com/",
            region: "north-america",
            country: "美国",
            bias: "center",
            description: "专注于商业和市场新闻的国际通讯社。"
        },
        {
            name: "日本放送协会(NHK)",
            url: "https://www3.nhk.or.jp/nhkworld/",
            region: "asia",
            country: "日本",
            bias: "center",
            description: "日本公共广播公司，提供全面的亚洲和国际新闻。"
        },
        // 右派媒体
        {
            name: "福克斯新闻",
            url: "https://www.foxnews.com/",
            region: "north-america",
            country: "美国",
            bias: "right",
            description: "美国保守派媒体，支持传统价值观和共和党政策。"
        },
        {
            name: "每日电讯报",
            url: "https://www.telegraph.co.uk/",
            region: "europe",
            country: "英国",
            bias: "right",
            description: "英国保守派报纸，支持保守党和传统价值观。"
        },
        {
            name: "Breitbart",
            url: "https://www.breitbart.com/",
            region: "north-america",
            country: "美国",
            bias: "right",
            description: "美国右翼新闻和评论网站，支持民族主义和保守主义。"
        },
        {
            name: "华尔街日报",
            url: "https://www.wsj.com/",
            region: "north-america",
            country: "美国",
            bias: "right",
            description: "美国商业和财经报纸，在经济政策上持保守立场。"
        },
        {
            name: "读卖新闻",
            url: "https://www.yomiuri.co.jp/",
            region: "asia",
            country: "日本",
            bias: "right",
            description: "日本最大的报纸之一，倾向保守主义立场。"
        },
        // 亚洲媒体
        {
            name: "中央通讯社",
            url: "https://www.cna.com.tw/",
            region: "asia",
            country: "台湾",
            bias: "center",
            description: "台湾国家通讯社，提供台湾和国际新闻。"
        },
        {
            name: "韩联社",
            url: "https://en.yna.co.kr/",
            region: "asia",
            country: "韩国",
            bias: "center",
            description: "韩国国家通讯社，提供韩国和国际新闻。"
        },
        {
            name: "海峡时报",
            url: "https://www.straitstimes.com/",
            region: "asia",
            country: "新加坡",
            bias: "center",
            description: "新加坡主要英文报纸，关注亚洲和国际事务。"
        }
    ];

    const newsContainer = document.getElementById('news-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const disclaimerModal = document.getElementById('disclaimer-modal');
    const disclaimerLink = document.getElementById('disclaimer-link');
    const closeButton = document.querySelector('.close-button');
    const regionBtns = document.querySelectorAll('.filter-btn[data-region]');

    let currentRegionFilter = 'all';

    // 渲染新闻卡片
    function renderNewsCards(data) {
        newsContainer.innerHTML = '';
        if (data.length === 0) {
            newsContainer.innerHTML = '<div class="no-results">没有找到符合条件的新闻站点</div>';
            return;
        }
        
        data.forEach((news, index) => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.style.animationDelay = `${index * 0.05}s`;
            card.onclick = function() {
                window.open(news.url, '_blank');
            };
            
            card.innerHTML = `
                <div class="card-header">
                    <span class="news-name">${news.name}</span>
                </div>
                <div class="card-body">
                    <div class="news-region">${news.country}（${getRegionName(news.region)}）</div>
                    <p class="news-description">${news.description}</p>
                </div>
            `;
            
            newsContainer.appendChild(card);
        });
    }

    // 获取区域名称
    function getRegionName(region) {
        const regionMap = {
            'asia': '亚洲',
            'europe': '欧洲',
            'north-america': '北美',
            'others': '其他地区'
        };
        return regionMap[region] || region;
    }

    // 过滤新闻
    function filterNews() {
        let filtered = [...newsData];
        
        // 应用区域过滤
        if (currentRegionFilter !== 'all') {
            filtered = filtered.filter(news => news.region === currentRegionFilter);
        }
        
        // 应用搜索过滤
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            filtered = filtered.filter(news => 
                news.name.toLowerCase().includes(searchTerm) || 
                news.country.toLowerCase().includes(searchTerm) ||
                news.description.toLowerCase().includes(searchTerm)
            );
        }
        
        renderNewsCards(filtered);
    }

    // 初始化页面
    renderNewsCards(newsData);

    // 事件监听器
    regionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            regionBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentRegionFilter = this.getAttribute('data-region');
            filterNews();
        });
    });

    searchButton.addEventListener('click', filterNews);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterNews();
        }
    });

    // 免责声明模态框
    disclaimerLink.addEventListener('click', function(e) {
        e.preventDefault();
        disclaimerModal.style.display = 'flex';
    });

    closeButton.addEventListener('click', function() {
        disclaimerModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === disclaimerModal) {
            disclaimerModal.style.display = 'none';
        }
    });
});