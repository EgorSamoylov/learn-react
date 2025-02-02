import React, { useState } from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostFilter = ({filter, setFilter}) => {

  const [search, setSearch] = useState(filter);
  // console.log(typeof(filter));

    return (
        <div>
        <div className="searchSystem">
          <MyInput
            value={search.query}
            onChange={e => setSearch({...search, query: e.target.value})}
            placeholder={'Поиск...'}
          />
          <MyButton
            style={{marginRight: "0px"}}
            onClick={() => setFilter({...filter, query: search.query})}
          >
            Найти
          </MyButton>
        </div>
        {/* <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder={'Поиск...'}
        /> */}
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
    );
};

export default PostFilter;