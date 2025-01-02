use market_db;

drop table if exists purchaseItem;
drop table if exists purchase;
drop table if exists reply;
drop table if exists deletedItem;
drop table if exists item;
drop table if exists member;
create table member(
	idx bigint primary key auto_increment,
  username varchar(30) unique,
  password varchar(80) not null,
  email varchar(30),
  regDate date default (curdate())
);

create table item(
	idx bigint primary key auto_increment,
  name varchar(70) unique,
  baseImgUrl varchar(70) not null,
  shortDesc varchar(200) not null,
  longDesc varchar(2000) null,
  price int not null,
  regDate date default (curdate()),
  stock int not null default 0,
  providerIdx bigint not null,
  deleted boolean not null default false
);
create index idx_item_price on item(price);
create index idx_item_provider on item(providerIdx);
create table deletedItem(
	idx bigint primary key,
  name varchar(70) unique,
  shortDesc varchar(200) not null,
  longDesc varchar(2000) null,
  price int not null,
  regDate date not null,
  deletedDate date default (curdate()),
  providerIdx bigint not null
);

create table reply(
	idx bigint primary key auto_increment,
  memberIdx bigint not null,
  itemIdx bigint not null,
  content varchar(300),
  star tinyint default 1,
  regTime timestamp default current_timestamp
);
create index idx_reply_item on reply(itemIdx);

create table purchase(
	idx bigint primary key auto_increment,
  buyerIdx bigint not null,
  purchaseTime timestamp not null default current_timestamp,
  canceled boolean not null default false,
  amount bigint default 0
);
create index idx_purchase_buyer on purchase(buyerIdx);
create table purchaseItem(
	purchaseIdx bigint not null,
  itemIdx bigint not null,
  quantity int not null default 0,
  primary key (purchaseIdx, itemIdx)
);