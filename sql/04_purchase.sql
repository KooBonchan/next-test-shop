insert into purchase(buyerIdx, amount)
values (1, 1234567);
insert into purchaseItem(purchaseIdx, itemIdx, quantity)
values(1,1,1);


alter table purchase
add constraint fk_purchase_buyer foreign key (buyerIdx)
	references member(idx);
alter table purchaseItem
add constraint fk_purchaseItem_purchase foreign key (purchaseIdx)
	references purchase(idx);
alter table purchaseItem
add constraint fk_purchaseItem_item foreign key (purchaseIdx)
	references item(idx);

select *
from purchase p
inner join purchaseItem i
	on p.idx = i.purchaseIdx;