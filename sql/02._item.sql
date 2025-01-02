insert into item
(name, baseImgUrl, shortDesc, longDesc, price, stock, providerIdx)
values
('test item', '202501_SLASH_testuuid.jpg', 'Testing item', 'Testing Testing Item Item Item', 1234567, 32, 1);


alter table item
add constraint fk_item_member foreign key (providerIdx)
	references member(idx);
alter table deletedItem
add constraint fk_deletedItem foreign key (idx)
	references item(idx);