<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">휴가 신청</h3>
				</div>
				<div class="component-area-wrap lst-cards lst-cards__5colums lst-leave">
					<div class="component-area">
						<p class="component__title">발생</p>
						<p class="status-leave"><span class="bold">15.0</span>개</p>
					</div>
					<div class="component-area">
						<p class="component__title">사용</p>
						<p class="status-leave"><span class="bold">6.0</span>개</p>
					</div>
					<div class="component-area">
						<p class="component__title">잔여</p>
						<p class="status-leave"><span class="bold">9.0</span>개</p>
					</div>
					<div class="component-area">
						<p class="component__title">신청</p>
						<p class="status-leave"><span class="bold">3.0</span>개</p>
					</div>
					<div class="component-area">
						<p class="component__title">신청 후 잔여</p>
						<p class="status-leave"><span class="bold">6.0</span>개</p>
					</div>
				</div>
				<div class="component-area">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">휴가 구분</p>
						</div>
						<div class="component-box-cnt">
							<div class="select-options">
								<div class="input-radio select-options__item">
									<input type="radio" class="input" id="leaveType1" name="leaveType" value="" />
									<label for="leaveType1">연차</label>
								</div>
								<div class="input-radio select-options__item">
									<input type="radio" class="input" id="leaveType2" name="leaveType" value="" />
									<label for="leaveType2">반차</label>
								</div>
								<div class="input-radio select-options__item">
									<input type="radio" class="input" id="leaveType3" name="leaveType" value="" />
									<label for="leaveType3">반반차</label>
								</div>
								<div class="input-radio select-options__item">
									<input type="radio" class="input" id="leaveType4" name="leaveType" value="" />
									<label for="leaveType4">시간연차</label>
								</div>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">휴가 기간</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<el-date-picker
									v-model="value1"
									type="datetimerange"
									range-separator="~"
									start-placeholder="시작일"
									end-placeholder="종료일"
								>
								</el-date-picker>
								<button type="button" class="button button__add">
									<span class="icon icon-add"></span>
									추가
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="buttons-complete">
					<div class="buttons">
						<button type="submit" class="button button__submit">승인요청</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
