from fastapi import FastAPI, HTTPException, Body, Depends
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pymysql
import os
from dotenv import load_dotenv
from typing import List
import math
import os
from openai import AzureOpenAI

app = FastAPI()

# すべてのオリジンを許可する場合
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # すべてのオリジンを許可
    allow_credentials=True,
    allow_methods=["*"],  # すべてのメソッドを許可
    allow_headers=["*"],  # すべてのヘッダーを許可
)

# .envファイルを読み込む
load_dotenv()

# 環境変数からデータベース情報を取得
MYSQL_SERVER = os.getenv("MYSQL_SERVER")
MYSQL_USER = os.getenv("MYSQL_USER")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")
MYSQL_DB = os.getenv("MYSQL_DB")

class ProductQuery(BaseModel):
    code: str

class Item(BaseModel):
    PRD_ID: int
    PRD_CD: str
    PRD_NAME: str
    PRD_PRICE: int

class Purchase(BaseModel):
    EMP_CD: str = "9999999999"
    STORE_CD: str
    POS_NO: str
    items: List[Item]

def get_db_connection():
    return pymysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASSWORD, db=MYSQL_DB
    )

################## image_read_gpt ##################
class Sending_URL(BaseModel):
    sending_url: str

class Sending_text(BaseModel):
    sending_text: str

api_base = '' # your endpoint should look like the following https://YOUR_RESOURCE_NAME.openai.azure.com/
api_key=""
deployment_name = ''
api_version = '' # this might change in the future

client = AzureOpenAI(
    api_key=api_key,
    api_version=api_version,
    base_url=f"{api_base}openai/deployments/{deployment_name}/extensions",
)

def image_read_gpt4(IMAGE_URL):
    response = client.chat.completions.create(
        model=deployment_name,
        messages=[
            { "role": "system", "content": "You are a language analysis professional." },
            { "role": "user", "content": [  
                { 
                    "type": "text", 
                    "text": "Describe this picture.However, please give the output result in the form of an array of tags. Sample -> result tagA,result tagB,result tagC,...:" 
                },
                { 
                    "type": "image_url",
                    "image_url": {
                        "url": IMAGE_URL
                    }
                }
            ] } 
        ],
        max_tokens=200
    )
    print(response.choices[0].message.content)
    return response.choices[0].message.content

def add_array(new_url,new_tags):
    # 新しい要素を作成
    new_id = initial_data[-1][0] + 1  # 末尾の要素のIDに1を足して新しいIDを生成
    new_element = [new_id, new_url, new_tags]
    # 新しい要素を配列の末尾に追加
    initial_data.append(new_element)
    print(initial_data)

initial_data = [
        [1,"https://cdn.pixabay.com/photo/2018/06/22/08/24/emotions-3490223_1280.jpg","boat,silhouette,sunset,water,reflection', 'orange sky', 'gondola', 'venetian boat', 'person', 'rower', 'calm waters', 'tranquil scene', 'cloudy sky', 'evening', 'majestic',traditional boat,serene"],
        [2,"https://cdn.pixabay.com/photo/2018/01/31/09/42/people-3120717_1280.jpg","baby hand,parent hand,family,care,tenderness,protection,generations,love,trust,connection,childhood,infant,adult,close-up,human connection"],
        [3,"https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_1280.jpg", "child,bubbles,play,park,outdoor,daytime,casual clothing,fun,innocence,leisure activity,soap bubbles,blowing,concentration,holding,vest,standing,partially visible face,autumn,forest path,backlight,sunlight,shiny,floating,motion,joy,happiness,activity,clear sky,woods,nature"],
        [4,"https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg", "youth soccer,sports field,green jersey,orange soccer ball,artificial turf,sportswear,team practice,athletic activity,goalpost background,outdoor exercise"],
        [5,"https://cdn.pixabay.com/photo/2017/06/26/19/53/team-2444978_1280.jpg", "children,soccer,yellow jerseys,huddle,teamwork,coach,outdoors,sports,football pitch,daytime,grass field"],
        [6,"https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_1280.jpg", "narrow alleyway,lanterns,hanging signs,Japanese text,evening ambiance,vending machines,dining establishments,autumn leaves,power lines,urban scene"],
        [7,"https://cdn.pixabay.com/photo/2017/06/20/23/15/coffee-2425303_1280.jpg","laptop,coffee,cup,notebook,pen,workplace,table,wooden surface,cafe,technology,blank screen"],
        [8,"https://cdn.pixabay.com/photo/2024/04/20/11/56/boy-8708443_1280.jpg","guitarist,street performance,microphone,acoustic guitar,music,performing arts,outdoor,black shirt,beige pants,urban setting"],
        [9,"https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221_1280.jpg","baby,infant clothing,white fluffy rug,indoor,wooden floor,beige wall,striped hat,lying down,onesie with pattern"],
        [10,"https://cdn.pixabay.com/photo/2018/05/11/07/45/mother-3389671_1280.jpg","motherhood,baby,outdoors,affectionate,holding,white top,grass,floral pattern,bokeh effect,daylight,love,comfort,blanket,summer,sitting,greenery"]
    ]
# test = [
#         [1,"https://0.jpg","boat"],
#         [2,"https://0.jpg","boat"],
#         [3,"https://0.jpg","boat"],
#         [4,"https://0.jpg","boat"],
#         [5,"https://0.jpg","boat"],
#     ]

@app.get("/")
def read_root():
    return {"data": initial_data}

@app.post("/adding_tags/")
def adding_tags(sending_url: Sending_URL):
    new_tags = image_read_gpt4(sending_url.sending_url)
    add_array(sending_url.sending_url,new_tags)
    return {"adding_data": initial_data}


@app.post("/create/")
def create(sending_text: Sending_text):
    # new_tags = image_read_gpt4(sending_url.sending_url)
    # add_array(sending_url.sending_url,new_tags)
    print(sending_text)
    # return {"adding_data": initial_data}











@app.post("/search_product/")
def search_product(
    product_query: ProductQuery = Body(...),
    connection: pymysql.connections.Connection = Depends(get_db_connection),
):
    code = product_query.code
    try:
        with connection.cursor() as cursor:
            sql = "SELECT PRD_ID, PRD_CD, PRD_NAME, PRD_PRICE FROM m_product WHERE PRD_CD = %s"
            cursor.execute(sql, (code,))
            result = cursor.fetchone()
            if result:
                return {
                    "status": "success",
                    "message": {
                        "PRD_ID": result[0],
                        "PRD_CD": result[1],
                        "PRD_NAME": result[2],
                        "PRD_PRICE": result[3],
                    },
                }
            else:
                raise HTTPException(status_code=404, detail="Product not found")
    finally:
        connection.close()


@app.post("/purchase/")
def purchase(
    data: Purchase,
    connection: pymysql.connections.Connection = Depends(get_db_connection),
):
    try:
        with connection.cursor() as cursor:
            print(data)
            # t_txn への登録
            sql_txn = """
            INSERT INTO t_txn (DATETIME, EMP_CD, STORE_CD, POS_NO, TOTAL_AMT, TTL_AMT_EX_TAX)
            VALUES (NOW(), %s, %s, %s, %s, %s);
            """
            total_amt = sum(item.PRD_PRICE for item in data.items)  # 合計金額
            print(sql_txn)
            ttl_amt_ex_tax = math.ceil(total_amt * 1.1) # 税抜合計金額（仮に税込と同額として計算）
            cursor.execute(
                sql_txn,
                (data.EMP_CD, data.STORE_CD, data.POS_NO, total_amt, ttl_amt_ex_tax),
            )
            txn_id = cursor.lastrowid
            print(txn_id)

            # t_txn_dtl への登録
            for index, item in enumerate(data.items, start=1):
                sql_dtl = """
                INSERT INTO t_txn_dtl (TXN_ID, TXN_DTL_ID, PRD_ID, PRD_CD, PRD_NAME, PRD_PRICE, TAX_ID)
                VALUES (%s, %s, %s, %s, %s, %s, '10');
                """
                cursor.execute(
                    sql_dtl,
                    (
                        txn_id,
                        index,
                        item.PRD_ID,
                        item.PRD_CD,
                        item.PRD_NAME,
                        item.PRD_PRICE,
                    ),
                )

            connection.commit()
            return {
                "status": "success",
                "message": {"合計金額": ttl_amt_ex_tax, "合計金額（税抜）": total_amt},
            }
    except Exception as e:
        connection.rollback()
        return {"status": "failed", "detail": f"An error occurred: {str(e)}"}
    finally:
        connection.close()
