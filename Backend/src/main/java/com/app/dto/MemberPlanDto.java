package com.app.dto;

import java.time.LocalDate;

import org.hibernate.annotations.CreationTimestamp;

import com.app.pojos.MemberPlan;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class MemberPlanDto {
//	private int id;
	private int userId;
	private int planId;
	@CreationTimestamp
	private LocalDate subscriptionDate;

	public static MemberPlanDto fromEntityList(LocalDate endDate) {
		MemberPlanDto planDto = new MemberPlanDto();
//		LocalDate date = endDate.getSubscriptionDate();
//		date.plusDays(duration);
//		Calendar c = Calendar.getInstance();
//		c.setTime(date);
//		c.add(Calendar.DAY_OF_MONTH, duration);
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		String newDate = sdf.format(c.getTime());
//		planDto.setSubscriptionDate(newDate);		
		planDto.setSubscriptionDate(endDate.plusMonths(1));
//		planDto.setUserId(endDate.getUserId());
//		planDto.setPlanId(endDate.getPlanId());
		return planDto;
	}

}
