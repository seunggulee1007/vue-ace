<template>
	<div class="container user-container">
		<section class="section__contents">
			<div class="inner-wrap">
				<div class="section-top">
					<h3 class="section__title">영업 기회 등록</h3>
				</div>
				<div class="component-area">
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">거래처명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input
									class="input "
									type="text"
									placeholder="입력하세요"
									maxlength="150"
									ref="clientNm"
								/>
								<button type="button" class="button" ref="dupleBtn">
									<span class="icon icon-check"></span>
									중복확인
								</button>
							</div>
							<div class="input-box">
								<input class="input" type="text" readonly />
								<button type="button" class="button">
									<span class="icon icon-check"></span>
									재조회
								</button>
							</div>
							<p class="msg-state">거래처명 중복 체크를 해주세요.</p>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">영업 담당자</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" />
								<button type="button" class="button button__add">
									<span class="icon icon-user"></span>검색
								</button>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">영업 기회 일자</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="입력하세요" />
								<span class="icon icon-calendar"></span>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">영업 기회명</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input " type="text" placeholder="입력하세요" maxlength="150" />
								<button type="button" class="button" ref="dupleBtn">
									<span class="icon icon-check"></span>
									중복조회
								</button>
							</div>
							<p class="msg-state">영업기회명 중복확인을 해주세요.</p>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">정보 출처</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">출처1</option>
									<option value="">출처2</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">프로젝트 유형</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">유형1</option>
									<option value="">유형2</option>
								</select>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">제품 유형</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">유형1</option>
									<option value="">유형2</option>
								</select>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">지역</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">서울</option>
									<option value="">경기</option>
									<option value="">인천</option>
								</select>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">경쟁업체</p>
						</div>
						<div class="component-box-cnt">
							<!-- 기존에 등록된 경쟁업체목록에서의 추가하기
								element - select - Create new items -->
							<!-- 목록에 없는 경우 직접 입력 -->
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">성공 확률 (%)</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-select input-box input-box-icon">
								<select name="" id="" class="selectbox">
									<option value="">0%</option>
									<option value="">50%</option>
									<option value="">100%</option>
								</select>
								<span class="icon icon-arrow"></span>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">예상 매출월</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box input-box-icon">
								<input class="input input-icon" type="text" placeholder="입력하세요" />
								<span class="icon icon-calendar"></span>
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">예상매출액</p>
						</div>
						<div class="component-box-cnt">
							<div class="input-box">
								<input class="input" type="text" placeholder="입력하세요" />
							</div>
						</div>
					</div>
					<div class="component-box">
						<div class="component-box-top">
							<p class="component__title">등록일자</p>
						</div>
						<div class="input-box">
							<input class="input" type="text" readonly />
						</div>
					</div>
					<div class="buttons-complete">
						<div class="buttons">
							<button type="submit" class="button button__save">
								등록
							</button>
							<button type="submit" class="button button__save">
								수정
							</button>
							<button type="button" class="button button__cancel">취소</button>
							<button type="button" class="button button__back">이전페이지</button>
						</div>
					</div>
				</div>
				<div class="component-area">
					<h4 class="content__title">영업 활동 내역</h4>
					<div class="table-wrap">
						<table class="table">
							<thead>
								<tr>
									<th>No.</th>
									<th>방문 일자</th>
									<th>방문 시간</th>
									<th>영업 담당자</th>
									<th>영업 활동 방법</th>
									<th>영업 활동 목적</th>
									<th>세부 활동 내역</th>
									<th>동행자</th>
									<th>고객명</th>
								</tr>
							</thead>
							<tbody>
								<tr class="row">
									<td>1</td>
									<td>2021-01-04</td>
									<td>14:00</td>
									<td>최수현</td>
									<td>전화</td>
									<td>계약체결</td>
									<td>안내메일 발송</td>
									<td></td>
									<td>담당자명</td>
								</tr>
								<tr class="row">
									<td>2</td>
									<td>2021-01-04</td>
									<td>14:00</td>
									<td>최수현</td>
									<td>전화</td>
									<td>계약체결</td>
									<td>안내메일 발송</td>
									<td></td>
									<td>담당자명</td>
								</tr>
							</tbody>
						</table>
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
