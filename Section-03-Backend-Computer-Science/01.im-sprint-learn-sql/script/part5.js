//1-1. category 테이블의 구조를 보기위한 SQL을 작성해주세요.
//요구사항에 맞는 category 테이블을 작성해야만, 테스트를 통과합니다.
const PART5_1_1 = `desc category`;

//1-2. content_category 테이블의 구조를 보기위한 SQL을 작성해주세요.
//요구사항에 맞는 content_category 테이블을 작성해야만, 테스트를 통과합니다.
const PART5_1_2 = `desc content_category`;

//1-3. role 테이블의 구조를 보기위한 SQL을 작성해주세요.
//요구사항에 맞는 role 테이블을 작성해야만, 테스트를 통과합니다.
const PART5_1_3 = `desc role`;

//1-4. user 테이블의 구조를 보기위한 SQL을 작성해주세요.
//요구사항에 맞는 user 테이블을 작성해야만, 테스트를 통과합니다.
const PART5_1_4 = `desc user`;

//2-1. category 테이블에 존재하는 데이터에서 id, name을 찾는 SQL을 작성해주세요.
const PART5_2_1 = `select * from category`;

//2-2. user의 name과 email 그리고 그 user가 속한 role name(컬럼명: roleName)을 찾기 위한 SQL을 작성해주세요.
//속한 role이 없더라도, user의 name과 email,role name을 모두 찾아야합니다.
const PART5_2_2 = `select user.name, user.email, role.name as roleName from role
                    right join user on user.roleId = role.id`;

//2-3. 어느 role에도 속하지 않는 user의 모든 컬럼 데이터를 찾기위한 SQL을 작성해주세요.
const PART5_2_3 = `select * from user where user.roleId is null`;

//2-4. content_category 테이블에 존재하는 모든 칼럼의 데이터를 찾기위한 SQL을 작성해주세요.
const PART5_2_4 = `select * from content_category`;

//2-5. jiSungPark이 작성한 content의 title을 찾기위한 SQL을 작성해주세요.
const PART5_2_5 = `select content.title from content inner join user
                    on user.id = content.userId where user.name = 'jiSungPark'`;

//2-6. JiSungPark이 작성한 content의 category name을 찾기위한 SQL을 작성해주세요.
const PART5_2_6 = `select category.name from category 
                    inner join content_category on category.id = content_category.categoryId
                    inner join content on content.id = content_category.contentId
                    inner join user on user.id = content.userId
                    where user.name = 'JiSungPark'`;

//2-7. category의 name이 soccer인 content의 
//title, body, created_at을 찾기위한 SQL을 작성해주세요.
const PART5_2_7 = `select content.title, content.body, content.created_at from content
                    inner join content_category on content.id = content_category.contentId
                    inner join category on content_category.categoryId = category.id
                    where category.name = 'soccer'`;

//2-8. category의 name이 soccer인 content의 
//title, body, created_at, user의 name을 찾기위한 SQL을 작성해주세요.
const PART5_2_8 = `select content.title, content.body, content.created_at, user.name from user
                    inner join content on user.id = content.userId
                    inner join content_category on content.id = content_category.contentId
                    inner join category on content_category.categoryId = category.id
                    where category.name = 'soccer'`;

//2-9. duRiCha가 작성한 글의 개수 (컬럼명: ContentCount)를 출력하기 위한 SQL을 작성해주세요.
const PART5_2_9 = `select count(content.title) as ContentCount from content
                    inner join user on user.id = content.userId
                    where user.name = 'duRiCha'`;

//2-10. 각 user(컬럼명: name)가 작성한 글의 개수 (컬럼명: ContentCount)를 
//출력하기 위한 SQL을 작성해주세요.
const PART5_2_10 = `select user.name as name, count(content.title) as ContentCount from user 
                    left join content on user.id = content.userId
                    group by user.name`;

module.exports = {
    PART5_1_1,
    PART5_1_2,
    PART5_1_3,
    PART5_1_4,
    PART5_2_1,
    PART5_2_2,
    PART5_2_3,
    PART5_2_4,
    PART5_2_5,
    PART5_2_6,
    PART5_2_7,
    PART5_2_8,
    PART5_2_9,
    PART5_2_10,
};
