insert into reply
(memberIdx, itemIdx, content, star)
values
(1,1,'Test Reply - Reply on the board', 3);

alter table reply
add constraint fk_reply_member foreign key (memberIdx)
	references member(idx);