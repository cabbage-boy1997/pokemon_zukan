// 目次
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

// HTMLのbodyにテーブルを追加
document.getElementById('pokemonMokuii').appendChild(table);

// テーブル内に情報を入れる
    //１行目
        let tr_headerRow = document.createElement('tr');
            let th_image = document.createElement('th');
            th_image.innerHTML = "すがた";
            let th_name = document.createElement('th');
            th_name.innerHTML = "名前";

            tr_headerRow.appendChild(th_image);
            tr_headerRow.appendChild(th_name);
        thead.appendChild(tr_headerRow);

    // ２行目以降
const pokemonDic= require("./pokemonDic.json");     //JSON呼び出し
// console.log(pokemonDic);

            let tr;

            let td_1;
            let td_2;

            for(var i=0; i<pokemonDic.length; i++){
                tr = document.createElement('tr');
                
                td_1 = document.createElement('td');
                    data_1 = pokemonDic[i].img;

                    photo = document.createElement('img');
                    photo.src = data_1;
                    photo.width = 100
                    photo.height = 100
                    photo.alt = pokemonDic[i].name

                tr.appendChild(td_1);
                    td_1.appendChild(photo);

                td_2 = document.createElement('td');
                tr.appendChild(td_2);

                    rink_start = document.createElement('a');
                    rink_start.href = pokemonDic[i].id;
                    td_2.appendChild(rink_start);

                    rink_start.innerHTML = pokemonDic[i].name;
                
                tbody.appendChild(tr);
            };


// 本文
// 表
let table_m = document.createElement('table');
    let thead_m = document.createElement('thead');
    let tbody_m = document.createElement('tbody');

    table_m.appendChild(thead_m);
    table_m.appendChild(tbody_m);

document.getElementById('pokemonZukan').appendChild(table_m);

    // １行目
        let tr_headerRow_m = document.createElement('tr');
            let th_image_m = document.createElement('th');
            th_image_m.innerHTML = "すがた";
            let th_status_m = document.createElement('th');
            th_status_m.innerHTML = "情報";

            tr_headerRow_m.appendChild(th_image_m);
            tr_headerRow_m.appendChild(th_status_m);
        thead_m.appendChild(tr_headerRow_m);

            // ２行目以降
        let tr_m;

            let td_m1;
            let td_m2;

            for(var i=0; i<pokemonDic.length; i++){
                tr_m = document.createElement('tr');
                
                td_m1 = document.createElement('td');
                    data_m1 = pokemonDic[i].img;

                    photo_m = document.createElement('img');
                    photo_m.src = data_m1;
                    photo_m.width = 300
                    photo_m.height = 300
                    photo_m.alt = pokemonDic[i].name

                tr_m.appendChild(td_m1);
                    td_m1.appendChild(photo_m);

                td_m2 = document.createElement('td');
                tr_m.appendChild(td_m2);

                    rink_goal = document.createElement('a');
                    rink_goal.name = pokemonDic[i].name;
                    td_m2.appendChild(rink_goal); 

                    infoHeader = document.createElement('header');
                    td_m2.appendChild(infoHeader);

                    h1 = document.createElement('h1');
                    h1.innerHTML = pokemonDic[i].name;
                    infoHeader.appendChild(h1);


                    ul_m = document.createElement('ul');
                    td_m2.appendChild(ul_m);

                    li_m1 = document.createElement('li');
                    li_m1.innerHTML = "分類：";
                    li_m1.innerHTML += pokemonDic[i].class;
                    ul_m.appendChild(li_m1);

                    li_m2 = document.createElement('li');
                    li_m2.innerHTML = "タイプ：";
                    li_m2.innerHTML += pokemonDic[i].type;
                    ul_m.appendChild(li_m2);

                    li_m3 = document.createElement('li');
                    li_m3.innerHTML = "高さ：";
                    li_m3.innerHTML += pokemonDic[i].height;
                    ul_m.appendChild(li_m3);

                    li_m4 = document.createElement('li');
                    li_m4.innerHTML = "重さ：";
                    li_m4.innerHTML += pokemonDic[i].weight;
                    ul_m.appendChild(li_m4);

                    li_m5 = document.createElement('li');
                    li_m5.innerHTML = "特性：";
                    li_m5.innerHTML += pokemonDic[i].chara;
                    ul_m.appendChild(li_m5);

                    li_m6 = document.createElement('li');
                    li_m6.innerHTML = "説明：";
                    li_m6.innerHTML += pokemonDic[i].explain;
                    ul_m.appendChild(li_m6);

                tbody_m.appendChild(tr_m);
            };
